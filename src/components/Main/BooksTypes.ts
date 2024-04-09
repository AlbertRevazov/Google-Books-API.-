export type Books = {
	kind: string
	totalItems: number
	items: []
}

export type Items = {
	kind: string
	id: string
	etag: string
	selfLink: string
	volumeInfo: VolumeInfo
	saleInfo: SaleInfo
	accessInfo: AccessInfo
	searchInfo: SearchInfo
}
export type VolumeInfo = {
	title: string
	publisher: string
	publishedDate: string
	description: string
	pageCount: number
	printType: string
	averageRating: number
	ratingsCount: number
	maturityRating: string
	allowAnonLogging: boolean
	contentVersion: string
	language: string
	previewLink: string
	infoLink: string
	canonicalVolumeLink: string
	authors: string[]
	imageLinks: {
		smallThumbnail: string
		thumbnail: string
	}
}
export type SaleInfo = {
	country: string
	saleability: string
	isEbook: boolean
}
export type AccessInfo = {
	country: string
	viewability: string
	embeddable: boolean
	publicDomain: boolean
	textToSpeechPermission: string
	webReaderLink: string
	accessViewStatus: string
	quoteSharingAllowed: boolean
}
export type SearchInfo = {
	textSnippet: string
}
