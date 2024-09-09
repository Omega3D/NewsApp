using API.Helpers;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;

namespace API.Controllers
{
    public class NewsController : BaseController
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet("get-news")]
        public async Task<IActionResult> GetAllNewsJson([FromQuery] PaginationQuery query)
        {
            return await _newsService.GetAllNews(query);
        }

        [HttpGet("get-news-by/{type}")]
        public async Task<IActionResult> GetNewsByType(string type, [FromQuery] PaginationQuery query)
        {
            return await _newsService.GetNewsByType(type, query);
        }
    }
}
