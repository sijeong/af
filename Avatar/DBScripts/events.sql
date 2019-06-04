CREATE TABLE [dbo].[Event] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Description] NVARCHAR (50) NOT NULL,
    [Amount]      DECIMAL (18)  NOT NULL,
    [Date]        DATETIME      NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

