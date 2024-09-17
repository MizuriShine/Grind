using System.ComponentModel.DataAnnotations;

public class Page
{
	public int Id { get; set; }
	[Required]
	public required string Title { get; set; }
	public string? Content { get; set; }
	public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
	public DateTime? UpdatedDate { get; set; }
}