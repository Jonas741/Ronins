using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using PicBook.ApplicationService;
using PicBook.Repository.EntityFramework;
using PicBook.Domain;
using PicBook.Web.Helpers;

namespace PicBook.Web.Controllers
{
  [Route("api/[controller]")]
  public class AccountController : Controller
  {
    private readonly IUserService _userService;

    public AccountController(IUserService userService)
    {
      _userService = userService;
    }

    public IActionResult Login()
    {
      return View();
    }

    //  [HttpPost]
    //  [Route("Login")]
    //public async Task<IActionResult> Login([FromBody]UserDTO model)
    //{
    //  var userEntity = new UserEntity() { Name = model.Name, Email...  };
    //  var confUser = _userService.GetUserByExternalIdentifier(userEntity.UserIdentifier);

    //  if (confUser == null)
    //  {
    //    var newUser = await _userService.AddNew(...);
    //    return Ok(ApiResult.Set("User added to database.", ...); //RETURN DATA TO STORE IN THE BROWSER'S LOCAL STORAGE.
    //  }

    //  return Ok(ApiResult.Set("Existing user fetched from database.", Json(new { asd = "xx" })));
    //}

    public IActionResult LoginFacebook()
    {
      var authenticationProperties = new AuthenticationProperties
      {
        RedirectUri = Url.Action("AuthCallback", "Account")
      };

      return Challenge(authenticationProperties, "Facebook");
    }

    public IActionResult LoginGoogle()
    {
      var authenticationProperties = new AuthenticationProperties
      {
        RedirectUri = Url.Action("AuthCallback", "Account")
      };

      return Challenge(authenticationProperties, "Google");
    }

    public async Task<IActionResult> AuthCallback()
    {
      var facebookIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "Facebook" && i.IsAuthenticated);
      var googleIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "Google" && i.IsAuthenticated);

      if (facebookIdentity == null)
      {
        return Redirect(Url.Action("Login", "Account"));
      }

      if (facebookIdentity != null)
      {
        IEnumerable<Claim> a = facebookIdentity.Claims;
        await _userService.EnsureUser(facebookIdentity.Claims.ToList());
      }
      else if (googleIdentity != null) {
        IEnumerable<Claim> a = googleIdentity.Claims;
        await _userService.EnsureUser(googleIdentity.Claims.ToList());
      }

      return Redirect(Url.Action("Index", "Home"));
    }

    public IActionResult Logout()
    {
      HttpContext.SignOutAsync();
      return Redirect(Url.Action("Index", "Home"));
    }
  }
}
