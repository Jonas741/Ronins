using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace PicBook.Web.Helpers
{
  public class ExternalTokenHandler
  {
    private static readonly string FACEBOOK_TOKEN_VALIDATION_URL = "https://graph.facebook.com/v2.4/me/?access_token=";
    private static readonly string GOOGLE_TOKEN_VALIDATION_URL = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=";
    private static readonly HttpClient client = new HttpClient();

    public static async Task<bool> Validate(string token, string provider)
    {
      string url = "";

      if (provider == "google")
        url = GOOGLE_TOKEN_VALIDATION_URL + token;
      else if (provider == "facebook")
        url = FACEBOOK_TOKEN_VALIDATION_URL + token;
      else
        return false;

      var responseMessage = await client.GetAsync(url);

      return responseMessage.IsSuccessStatusCode;
    }
  }
}
