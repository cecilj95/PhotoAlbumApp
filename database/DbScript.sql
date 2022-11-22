/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2017 (14.0.2042)
    Source Database Engine Edition : Microsoft SQL Server Standard Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2017
    Target Database Engine Edition : Microsoft SQL Server Standard Edition
    Target Database Engine Type : Standalone SQL Server
*/

USE [Projects]
GO

/****** Object:  Table [dbo].[PhotoAlbumDB]    Script Date: 11/21/2022 8:31:27 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PhotoAlbumDB](
	[PhotoAlbum_ID] [int] IDENTITY(1,1) NOT NULL,
	[PhotoImageUrl] [nvarchar](max) NULL,
	[Title] [nvarchar](max) NULL,
	[Username] [nvarchar](50) NULL,
 CONSTRAINT [PK_PhotoAlbumDB] PRIMARY KEY CLUSTERED 
(
	[PhotoAlbum_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

