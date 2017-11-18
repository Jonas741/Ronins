using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using PicBook.ApplicationService;

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
