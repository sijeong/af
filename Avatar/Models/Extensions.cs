using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Avatar.Models
{
    public static class Extensions
    {
        public static string GetDescription<T>(this T e) where T : IConvertible
        {
            if (e is Enum)
            {
                Type type = e.GetType();
                Array values = System.Enum.GetValues(type);

                foreach (int val in values)
                {
                    if (val == e.ToInt32(CultureInfo.InvariantCulture))
                    {
                        var memInfo = type.GetMember(type.GetEnumName(val));
                        var descriptionAttribute = memInfo[0]
                            .GetCustomAttributes(typeof(DescriptionAttribute), false)
                            .FirstOrDefault() as DescriptionAttribute;

                        if (descriptionAttribute != null)
                        {
                            return descriptionAttribute.Description;
                        }
                    }
                }
                return null;
            }
            return null;
        }

        public static string Limit(this string str, int characterCount)
        {
            if (str.Length <= characterCount) return str;
            else return str.Substring(0, characterCount).TrimEnd(' ');
        }

        public static string LimitWithElipsesOnWordBoundary(this string str, int characterCount)
        {
            if (characterCount < 5) return str.Limit(characterCount);       // Can't do much with such a short limit
            if (str.Length <= characterCount - 3)
                return str;
            else
            {
                int lastspace = str.Substring(0, characterCount - 3).LastIndexOf(' ');
                if (lastspace > 0 && lastspace > characterCount - 10)
                {
                    return str.Substring(0, lastspace) + "...";
                }
                else
                {
                    // No suitable space was found
                    return str.Substring(0, characterCount - 3) + "...";
                }
            }
        }
    }
}
