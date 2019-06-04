using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avatar.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Avatar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly AvatarContext _context;

        public ArticleController(AvatarContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(string id)
        {
            
            var article = await _context.Article.FindAsync(int.Parse(id));

            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticleList()
        {
            return await _context.Article.OrderByDescending(a => a.Id).ToListAsync();

        }

        [HttpPost]
        public async Task<ActionResult<Article>> PostArticle([FromBody] Article article)
        {
            _context.Article.Add(article);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article);
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> PutArticle(int id, Article article)
        {
            if (id != article.Id)
            {
                return BadRequest();
            }

            _context.Entry(article).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("d/{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var article = await _context.Article.FindAsync(id);

            if(article == null)
            {
                return NotFound();
            }

            _context.Article.Remove(article);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("ds")]
        public async Task<IActionResult> DeleteArticle([FromBody] int[] ids)
        {
            Array.ForEach(ids, (id) =>
            {
                var article = _context.Article.Find(id);

                _context.Article.Remove(article);
            });

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}