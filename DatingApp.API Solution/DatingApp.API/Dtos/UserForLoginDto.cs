using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required(ErrorMessage = "User Name cannont be empty.")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "User Name cannot be less than 3 or more than 50 chars.")]
        public string Username { get; set; }


        [Required(ErrorMessage = "Password cannot be empty.")]
        [StringLength(12, MinimumLength = 6, ErrorMessage = "Password cannot be less than 6 or more than 12 chars.")]
        public string Password { get; set; }
    }
}
