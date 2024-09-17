public class PageService
{
    private readonly IPageRepository _pageRepository;

    public PageService(IPageRepository pageRepository)
    {
        _pageRepository = pageRepository;
    }

    public Task<IEnumerable<Page>> GetPagesAsync()
    {
        return _pageRepository.GetPagesAsync();
    }

    public Task<Page?> GetPageByIdAsync(int id)
    {
        return _pageRepository.GetPageByIdAsync(id);
    }

    public Task CreatePageAsync(Page page)
    {
        return _pageRepository.CreatePageAsync(page);
    }

    public Task UpdatePageAsync(Page page)
    {
        return _pageRepository.UpdatePageAsync(page);
    }

    public Task DeletePageAsync(Page page)
    {
        return _pageRepository.DeletePageAsync(page);
    }
}