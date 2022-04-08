using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FicticiaAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DocumentType",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    documentType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentType", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "GenderType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    gender = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenderType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    cli_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cli_Name = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    dni = table.Column<int>(type: "int", nullable: false),
                    cliDoc_DocumentType = table.Column<int>(type: "int", nullable: false),
                    cliGenGender = table.Column<int>(type: "int", nullable: false),
                    cli_Active = table.Column<bool>(type: "bit", nullable: false),
                    cli_Drive = table.Column<bool>(type: "bit", nullable: false),
                    cli_UseGlasses = table.Column<bool>(type: "bit", nullable: false),
                    cli_Diabetic = table.Column<bool>(type: "bit", nullable: false),
                    cli_OtherDiseases = table.Column<bool>(type: "bit", nullable: false),
                    cli_Diseases = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    documentTypeid = table.Column<int>(type: "int", nullable: true),
                    GenderTypeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.cli_Id);
                    table.ForeignKey(
                        name: "FK_Client_DocumentType_documentTypeid",
                        column: x => x.documentTypeid,
                        principalTable: "DocumentType",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Client_GenderType_GenderTypeId",
                        column: x => x.GenderTypeId,
                        principalTable: "GenderType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Client_documentTypeid",
                table: "Client",
                column: "documentTypeid");

            migrationBuilder.CreateIndex(
                name: "IX_Client_GenderTypeId",
                table: "Client",
                column: "GenderTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "DocumentType");

            migrationBuilder.DropTable(
                name: "GenderType");
        }
    }
}
