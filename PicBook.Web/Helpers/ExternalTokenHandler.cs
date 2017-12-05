using Microsoft.Extensions.Options;
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
    private static readonly HttpClient client = new HttpClient();
    private TokenValidationConfigurations configuration;

    public ExternalTokenHandler(IOptions<TokenValidationConfigurations> config)
    {
      configuration = config.Value;
    }

    public async Task<bool> Validate(string token, string provider)
    {
      string url = "";

      if (provider == "google")
        url = configuration.Google + token;
      else if (provider == "facebook")
        url = configuration.Facebook + token;
      else
        return false;

      var responseMessage = await client.GetAsync(url);

      return responseMessage.IsSuccessStatusCode;
    }
  }
}
