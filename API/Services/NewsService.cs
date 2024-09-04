using API.Helpers;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Services
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _repository;

        public NewsService(INewsRepository repository) 
        {
            _repository = repository;
        }

        public Task<IActionResult> GetAllNews(PaginationQuery query)
        {
            return _repository.GetAllNews(query);
        }

        public Task<IActionResult> GetNewsByType(string newsType, PaginationQuery query)
        {
            return _repository.GetNewsByType(newsType, query);
        }

    }
}
