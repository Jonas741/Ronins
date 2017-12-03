using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace PicBook.Web.Helpers
{
  public class ImageTaggingHandler
  {
    private static readonly HttpClient client = new HttpClient();
    private static readonly string API_URL = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";
    private static readonly string API_KEY = "a8d4d76007f0479aa4eb531f7a161a37";

    public static async Task<string> MakeTaggingRequest(byte[] byteData)
    {
      var tags = new List<string>();
      var tagsString = "";

      client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", API_KEY);
      var requestParameters = "visualFeatures=Tags&language=en";
      var url = API_URL + "?" + requestParameters;

      using (ByteArrayContent content = new ByteArrayContent(byteData))
      {
        content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
        var response = await client.PostAsync(url, content);
        var responseString = await response.Content.ReadAsStringAsync();

        var parsedResponse = JObject.Parse(responseString);
        var returnedTags = JArray.Parse(parsedResponse["tags"].ToString());

        if (returnedTags.Count == 0)
          return tagsString;

        foreach (JObject tag in returnedTags)
        {
            var name = (String)tag["name"];
            var conf = (double)tag["confidence"];

            if (conf > 0.5)
              tags.Add(name);
        }

        foreach (var tag in tags)
          tagsString += tag + "|";

        return tagsString.Substring(0, tagsString.Length - 1);
      }
    }
  }
}
