using System.ComponentModel.DataAnnotations;

namespace FicticiaAPI.Models
{
    public class Client
    {
        [Key]
        public int cli_Id { get; set; }

        [Required(ErrorMessage = "Debe ingresar un nombre.")]
        [StringLength(25, ErrorMessage = "Maximo 25 caracteres.")]
        [MinLength(2, ErrorMessage = "Debe ingresar un nombre válido.")]
        [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Solo se permite letras")]
        public string cli_Name { get; set; } = string.Empty;

        [Range(1000000, 99999999, ErrorMessage = "Ingrese un DNI valido.")]
        [Required(ErrorMessage = "Debe ingresar un DNI.")]
        public int dni { get; set; }

        public int cliDoc_DocumentType { get; set; }

        public int cliGenGender { get; set; }

        public bool cli_Active { get; set; }

        public bool cli_Drive { get; set; }

        public bool cli_UseGlasses { get; set; }

        public bool cli_Diabetic { get; set; }

        public bool cli_OtherDiseases { get; set; }

        public string cli_Diseases { get; set; } = string.Empty;


        public DocumentType? documentType { get; set; }

        public GenderType? GenderType { get; set; }

    }
}

