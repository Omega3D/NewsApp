using API.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.DataAccess
{
    public class NewsDbContext : DbContext
    {
        public NewsDbContext(DbContextOptions<NewsDbContext> options)
            : base(options)
        {
                
        }

        public DbSet<AppUser> Users { get; set; }
    }
}
