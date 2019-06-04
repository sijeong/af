CREATE TABLE [dbo].[Article] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Category]     NVARCHAR (10)  NOT NULL,
    [SubCategory]  NVARCHAR (10)  NOT NULL,
    [Title]        NVARCHAR (50)  NOT NULL,
    [Content]      NVARCHAR (MAX) NOT NULL,
    [DateCreated]  DATETIME       NOT NULL,
    [DateModified] DATETIME       NULL,
    [ViewCount]    INT            NULL,
    [Color]        NCHAR (10)     NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

