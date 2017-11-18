using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Linq;

namespace PicBook.Web.Helpers
{
  public class ApiResult
  {
    public static ApiResult Set(string message, object data = null)
    {
      return new ApiResult(message, data);
    }

    public ApiResult()
    {

    }

    public ApiResult(string message, object data)
    {
      Message = message;
      Data = data;
    }

    public string Message { get; set; }
    public object Data { get; set; }
  }
}
