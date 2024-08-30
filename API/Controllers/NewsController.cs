using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> GetAllNewsJson()
        {
            return await _newsService.GetAllNews();
        }

        [HttpGet("get-news-by/{type}")]
        public async Task<IActionResult> GetNewsByType(string type)
        {
            return await _newsService.GetNewsByType(type);
        }



    }
}
