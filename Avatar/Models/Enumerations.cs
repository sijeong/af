using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Avatar.Models
{
    public class Enumerations
    {
    }

    public enum ArticleCategory
    {
        [Description("SC")]
        Science,
        [Description("LT")]
        Literature,
        [Description("MT")]
        Mathematics
    }

    public enum ArticleScienceCategory
    {
        [Description("PY")]
        Physics,
        [Description("CM")]
        Chemestry,
        [Description("PS")]
        Psychology
    }

    public enum ArticleLiteratureCategory
    {
        [Description("NV")]
        Novel,
        [Description("ES")]
        Essay,
        [Description("BG")]
        Biography
    }

    public enum ArticleMathematicsCategory
    {
        [Description("GM")]
        Geometry,
        [Description("NT")]
        NumberTheory,
        [Description("TO")]
        Topology
    }

    public enum ArticleColor
    {
        [Description("#ff0060")]
        Red,
        [Description("#433e90")]
        Blue,
        [Description("#30343e")]
        Black
    }
}
