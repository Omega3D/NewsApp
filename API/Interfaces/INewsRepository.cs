using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface INewsRepository
    {
        Task<IActionResult> GetAllNews();
        Task<IActionResult> GetNewsByType(string newsType);
    }
}
