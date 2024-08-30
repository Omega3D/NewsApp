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

        public Task<IActionResult> GetAllNews()
        {
            return _repository.GetAllNews();
        }

        public Task<IActionResult> GetNewsByType(string newsType)
        {
            return _repository.GetNewsByType(newsType);
        }
    }
}
