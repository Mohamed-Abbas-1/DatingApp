using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using DatingApp.API.Dtos;
namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IDatingRepository repo, IMapper mapper) 
        {
            _repo = repo;
            _mapper = mapper;
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var usersForReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersForReturn);
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userForReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userForReturn);
        }
    }
}