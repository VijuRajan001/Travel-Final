using System;
using System.Collections.Generic;
using System.Text;

namespace DataRepository.Core
{
    public static class DataHelper
    {
        public static T ConvertTo<T>(object input)
        {
            if (input == null)
                return (T)GetDefault(typeof(T)); //default(T);

            T result;
            try
            {
                result = (T)Convert.ChangeType(input.ToString(), typeof(T));
            }
            catch
            {
                result = (T)GetDefault(typeof(T)); //default(T);
            }
            return result;
        }

        public static object GetDefault(Type t)
        {
            Func<object> f = GetDefault<object>;
            return f.Method.GetGenericMethodDefinition().MakeGenericMethod(t).Invoke(null, null);
        }

        private static T GetDefault<T>()
        {
            return default(T);
        }


    }



}
