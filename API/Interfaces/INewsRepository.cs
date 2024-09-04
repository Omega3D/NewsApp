using API.Helpers;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace API.Interfaces
{
    public interface INewsRepository
    {
        Task<IActionResult> GetAllNews(PaginationQuery query);
        Task<IActionResult> GetNewsByType(string newsType, PaginationQuery query);
    }
}
