using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Security.Cryptography;
public class CommonMD5
{
    public static string StrToMD5(string str)
    {
        byte[] data = Encoding.Default.GetBytes(str);
        MD5 md5 = new MD5CryptoServiceProvider();
        byte[] OutBytes = md5.ComputeHash(data);

        string OutString = "";
        for (int i = 0; i < OutBytes.Length; i++)
        {
            OutString += OutBytes[i].ToString("x2");

        }
        return OutString.ToLower();

    }
}
