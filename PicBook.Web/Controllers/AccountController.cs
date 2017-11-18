using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PicBook.ApplicationService;
using PicBook.Domain;
using PicBook.Web.Helpers;
using PicBook.Dto;

namespace PicBook.Web.Controllers
{
  [Route("api/account")]
  public class AccountController : Controller
  {
    private readonly IUserService _userService;

    public AccountController(IUserService userService)
    {
      _userService = userService;
    }

    //public IActionResult Login()
    //{
    //  return View();
    //}

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserDTO model)
    {
      if (!ModelState.IsValid)
        return BadRequest(ApiResult.Set("Validation error.", ModelState));

      var confUser = await _userService.GetUserdByIdentifier(model.UserIdentifier);

      if (confUser == null)
      {
        var userEntity = new UserEntity() { Name = model.Name, Email = model.Email, Provider = model.Provider, UserIdentifier = model.UserIdentifier };
        await _userService.AddNewUser(userEntity);
        return Ok(ApiResult.Set("User added to database.", Json(new { userId = userEntity.UserIdentifier })));
      }

      return Ok(ApiResult.Set("Existing user fetched from database.", Json(new { userId = confUser.UserIdentifier })));
    }

    //public IActionResult LoginFacebook()
    //{
    //  var authenticationProperties = new AuthenticationProperties
    //  {
    //    RedirectUri = Url.Action("AuthCallback", "Account")
    //  };

    //  return Challenge(authenticationProperties, "Facebook");
    //}

    //public IActionResult LoginGoogle()
    //{
    //  var authenticationProperties = new AuthenticationProperties
    //  {
    //    RedirectUri = Url.Action("AuthCallback", "Account")
    //  };

    //  return Challenge(authenticationProperties, "Google");
    //}

    //public async Task<IActionResult> AuthCallback()
    //{
    //  var facebookIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "Facebook" && i.IsAuthenticated);
    //  var googleIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "Google" && i.IsAuthenticated);

    //  if (facebookIdentity == null)
    //  {
    //    return Redirect(Url.Action("Login", "Account"));
    //  }

    //  if (facebookIdentity != null)
    //  {
    //    IEnumerable<Claim> a = facebookIdentity.Claims;
    //    await _userService.EnsureUser(facebookIdentity.Claims.ToList());
    //  }
    //  else if (googleIdentity != null) {
    //    IEnumerable<Claim> a = googleIdentity.Claims;
    //    await _userService.EnsureUser(googleIdentity.Claims.ToList());
    //  }

    //  return Redirect(Url.Action("Index", "Home"));
    //}

    //public IActionResult Logout()
    //{
    //  HttpContext.SignOutAsync();
    //  return Redirect(Url.Action("Index", "Home"));
    //}
  }
}
