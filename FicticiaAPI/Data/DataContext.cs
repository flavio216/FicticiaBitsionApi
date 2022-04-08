using FicticiaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FicticiaAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            

        }

        public DbSet<Client> Client { get; set; }

        public DbSet<DocumentType> DocumentType { get; set; }

        public DbSet<GenderType> GenderType { get; set; }

    }
}
