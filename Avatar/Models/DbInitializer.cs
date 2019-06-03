using Bogus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avatar.Models
{
    public static class DbInitializer
    {
        public static void Initialize(AvatarContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Event.Any())
            {
                var eventRules = new Faker<Event>()
                    .RuleFor(e => e.Description, f => f.Company.CompanyName())
                    .RuleFor(e => e.Amount, f => f.Finance.Amount())
                    .RuleFor(e => e.Date, f => f.Date.Between(DateTime.Now.AddMonths(-1), DateTime.Now));

                var events = eventRules.Generate(20);

                context.Event.AddRange(events);
            }

            if (!context.Article.Any() || context.Article.Count() <300)
            {
                var articleRules = new Faker<Article>()
                    .RuleFor(a => a.Category, f => f.PickRandom<ArticleCategory>().GetDescription())
                    .RuleFor(a => a.Title, f => f.Lorem.Sentence().LimitWithElipsesOnWordBoundary(50))
                    .RuleFor(a => a.Content, f => f.Lorem.Sentences())
                    .RuleFor(a => a.DateCreated, f => f.Date.Between(DateTime.Now.AddMonths(-1), DateTime.Now))
                    .RuleFor(a => a.Color, f=>f.PickRandom<ArticleColor>().GetDescription());

                var articles = articleRules.Generate(300 - context.Article.Count());
                var random = new Randomizer();

                articles.ForEach(a =>
                {
                    if (a.Category == ArticleCategory.Science.GetDescription())
                    {
                        a.SubCategory = random.Enum<ArticleScienceCategory>().GetDescription();
                    }
                    if (a.Category == ArticleCategory.Literature.GetDescription())
                    {
                        a.SubCategory = random.Enum<ArticleLiteratureCategory>().GetDescription();
                    }
                    if (a.Category == ArticleCategory.Mathematics.GetDescription())
                    {
                        a.SubCategory = random.Enum<ArticleMathematicsCategory>().GetDescription();
                    }
                });

                context.Article.AddRange(articles);

            }
            context.SaveChanges();
        }
    }
}
