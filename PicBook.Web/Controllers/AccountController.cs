using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PicBook.Web.Controllers
{
    public class AccountController : Controller
    {
        // GET: /<controller>/
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult LoginFacebook()
        {
            var authProps = new AuthenticationProperties
            {
                RedirectUri = Url.Action("AuthCallback", "Account")
            };

            return Challenge(authProps, "Facebook");
        }

        public IActionResult LoginMicrosoftAccount()
        {
            var authProps = new AuthenticationProperties
            {
                RedirectUri = Url.Action("AuthCallback", "Account")
            };

            return Challenge(authProps, "MicrosoftAccount");
        }
        public IActionResult LoginGoogle()
        {
            var authProps = new AuthenticationProperties
            {
                RedirectUri = Url.Action("AuthCallback", "Account")
            };

            return Challenge(authProps, "Google");
        }

        public IActionResult AuthCallback()
        {
            var facebookIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "Facebook" && i.IsAuthenticated);
            var googleIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "Google" && i.IsAuthenticated);
            var microsoftIdentity = User.Identities.FirstOrDefault(i => i.AuthenticationType == "MicrosoftAccount" && i.IsAuthenticated);

            if (facebookIdentity == null && googleIdentity == null && microsoftIdentity == null)
            {
                return Redirect(Url.Action("Login", "Account"));
            }

            return Redirect(Url.Action("Index", "Home"));
        }

        public IActionResult Logout()
        {
            HttpContext.SignOutAsync();
            return Redirect(Url.Action("Index, Home"));
        }
    }
}

