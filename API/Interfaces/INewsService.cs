using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface INewsService
    {
        Task<IActionResult> GetAllNews();
        Task<IActionResult> GetNewsByType(string newsType);
    }
}
