using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class PageController : ControllerBase
{
	private readonly PageService _pageService;

	public PageController(PageService pageService)
	{
		_pageService = pageService;
	}

	[HttpGet]
	public async Task<ActionResult<IEnumerable<Page>>> GetPages()
	{
		var pages = await _pageService.GetPagesAsync();
		return Ok(pages);
	}

	[HttpGet("{id}")]
	public async Task<ActionResult<Page>> GetPage(int id)
	{
		var page = await _pageService.GetPageByIdAsync(id);
		if (page == null)
			return NotFound();

		return Ok(page);
	}

	[HttpPost]
	public async Task<ActionResult<Page>> CreatePage([FromBody] PageCreateDTO pageCreateDTO)
	{
		if (!ModelState.IsValid)
			return BadRequest(ModelState);
		
		var page = new Page
		{
			Title = pageCreateDTO.Title,
			Content = pageCreateDTO.Content
		};
		
		await _pageService.CreatePageAsync(page);
		return CreatedAtAction(nameof(GetPage), new { id = page.Id }, page);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> UpdatePage(int id, [FromBody] PageUpdateDTO pageUpdateDTO)
	{
		if (!ModelState.IsValid)
			return BadRequest(ModelState);
		
		var page = await _pageService.GetPageByIdAsync(id);
		if (page == null)
			return NotFound();

		page.Title = pageUpdateDTO.Title;
		page.Content = pageUpdateDTO.Content;
		page.UpdatedDate = DateTime.UtcNow;

		await _pageService.UpdatePageAsync(page);
		return NoContent();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> DeletePage(int id)
	{
		var page = await _pageService.GetPageByIdAsync(id);
		if (page == null)
			return NotFound();

		await _pageService.DeletePageAsync(page);
		return NoContent();
	}
}