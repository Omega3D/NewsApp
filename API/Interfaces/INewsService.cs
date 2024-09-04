using API.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace API.Interfaces
{
    public interface INewsService
    {
        Task<IActionResult> GetAllNews(PaginationQuery query);
        Task<IActionResult> GetNewsByType(string newsType, PaginationQuery query);
    }
}
