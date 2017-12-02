using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PicBook.ApplicationService;
using PicBook.Repository.AzureStorage;
using PicBook.Repository.EntityFramework;
using System.IO;
using PicBook.Domain;

namespace PicBook.Web
{
  public class Startup
  {
    public IConfigurationRoot Configuration { get; private set; }

    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

      if (env.IsDevelopment())
      {
        builder.AddUserSecrets<Startup>();
      }
      builder.AddEnvironmentVariables();

      Configuration = builder.Build();
    }

    public void ConfigureServices(IServiceCollection services)
    {
      services.Configure<MvcOptions>(options =>
      {
        options.Filters.Add(new RequireHttpsAttribute());
      });

      services.AddMvc();

      services.AddDbContext<ApplicationDbContext>(options =>
          options.UseSqlServer(Configuration["Connections:DefaultConnection"]));

      //services.AddScoped<IGenericCrudRepository<Entity>, GenericCrudRepository<Entity>>();

      services.AddScoped<IImageService, ImageService>();
      services.AddScoped<IImageRepository>(r => new ImageRepository(Configuration["AzureStorage:ConnectionString"]));

      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IUserService, UserService>();

      services.AddScoped<IPictureRepository, PictureRepository>();
      services.AddScoped<IPictureService, PictureService>();

      services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();

      var options = new RewriteOptions().AddRedirectToHttps(301, 44301);
      app.UseRewriter(options);
      app.UseMvc();
    }
  }
}
