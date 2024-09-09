using API.DataAccess;
using API.Interfaces;
using API.Repositories;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<NewsDbContext>(
                options =>
                {
                    options.UseSqlite(config.GetConnectionString("DefaultConnection"));
                });

            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<INewsService, NewsService>();
            services.AddScoped<INewsRepository, NewsRepository>();

            return services;
        }
    }
}
