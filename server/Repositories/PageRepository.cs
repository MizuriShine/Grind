using Microsoft.EntityFrameworkCore;

public interface IPageRepository
{
	Task<IEnumerable<Page>> GetPagesAsync();
	Task<Page?> GetPageByIdAsync(int id);
	Task CreatePageAsync(Page page);
	Task UpdatePageAsync(Page page);
	Task DeletePageAsync(Page page);
}

public class PageRepository : IPageRepository
{
	private readonly ApplicationDbContext _dbContext;

	public PageRepository(ApplicationDbContext dbContext)
	{
		_dbContext = dbContext;
	}

	public async Task<IEnumerable<Page>> GetPagesAsync()
	{
		return await _dbContext.Pages.ToListAsync();
	}

	public async Task<Page?> GetPageByIdAsync(int id)
	{
		return await _dbContext.Pages.FindAsync(id);
	}

	public async Task CreatePageAsync(Page page)
	{
		_dbContext.Pages.Add(page);
		await _dbContext.SaveChangesAsync();
	}

	public async Task UpdatePageAsync(Page page)
	{
		_dbContext.Pages.Update(page);
		await _dbContext.SaveChangesAsync();
	}

	public async Task DeletePageAsync(Page page)
	{
		_dbContext.Pages.Remove(page);
		await _dbContext.SaveChangesAsync();
	}
}