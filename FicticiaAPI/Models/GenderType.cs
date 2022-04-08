using System.ComponentModel.DataAnnotations;

namespace FicticiaAPI.Models
{
    public class GenderType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string gender { get; set; } = string.Empty;
    }
}
