using Microsoft.AspNetCore.Mvc;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;

namespace API.Controllers
{
    public class NewsController : BaseController
    {
        [HttpGet("get-news")]
        public async Task<IActionResult> GetNewsJsonAsync()
        {
            try
            {
                var newsApiClient = new NewsApiClient("8ecdae338d9948c38ef2ad81d1b2e73c");

                var articlesResponse = await newsApiClient.GetEverythingAsync(new EverythingRequest
                {
                    Q = "technology OR sports OR politics OR entertainment OR business OR travel",
                    SortBy = SortBys.Relevancy,
                    Language = Languages.EN,
                    PageSize = 100,
                });

                if (articlesResponse.Status == Statuses.Ok && articlesResponse != null)
                {
                    var filteredArticles = articlesResponse.Articles.Where(Article =>
                        Article.Url != "https://removed.com" && Article.UrlToImage != null
                    ).ToList();

                    return Ok(filteredArticles);
                }
                else
                {
                    return BadRequest("Error: Invalid response status.");
                }
            }
            catch (Exception e)
            {
                throw new Exception("Something went wrong", e);
            }
        }

    }
}
