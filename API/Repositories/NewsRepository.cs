using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using NewsAPI.Constants;
using NewsAPI.Models;
using NewsAPI;
using API.Controllers;

namespace API.Repositories
{
    public class NewsRepository : BaseController ,INewsRepository
    {
        const string EveryNewsType = "technology OR sports OR politics OR entertainment OR business OR travel";

        private readonly string? _apiKey;

        
        public NewsRepository(IConfiguration configuration)
        {
            _apiKey = configuration["NewsApi:ApiKey"];
        }
        

        public async Task<IActionResult> GetAllNews()
        {
            try
            {
                var newsApiClient = new NewsApiClient(_apiKey);

                var articlesResponse = await newsApiClient.GetEverythingAsync(new EverythingRequest
                {
                    Q = EveryNewsType,
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

        public async Task<IActionResult> GetNewsByType(string newsType)
        {
            try
            {
                var newsApiClient = new NewsApiClient(_apiKey);

                var articlesResponse = await newsApiClient.GetEverythingAsync(new EverythingRequest
                {
                    Q = newsType,
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

