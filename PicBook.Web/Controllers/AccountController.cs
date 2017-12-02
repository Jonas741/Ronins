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

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserDTO model)
    {
      try
      {
        if (!ModelState.IsValid)
          return BadRequest(ApiResult.Set("Validation error.", ModelState));

        var confUser = await _userService.GetById(model.UserIdentifier);

        if (confUser == null)
        {
          var userEntity = new UserEntity()
          {
            Name = model.Name,
            Email = model.Email,
            Provider = model.Provider,
            Id = model.UserIdentifier
          };

          await _userService.AddNew(userEntity);

          return Ok(ApiResult.Set("User added to database.", Json(new { userId = userEntity.Id })));
        }

        return Ok(ApiResult.Set("Existing user fetched from database.", Json(new { userId = confUser.Id })));
      }
      catch (Exception e)
      {
        return BadRequest(ApiResult.Set(e.Message));
      }
    }

  }
}
