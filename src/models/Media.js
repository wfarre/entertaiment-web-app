class Media {
  constructor(data) {
    this._title = data.title;
    this._thumbnail = data.thumbnail;
    this._year = data.year;
    this._category = data.category;
    this._rating = data.rating;
    this._isBookmarked = data.isBookmarked;
    this._isTrending = data.isTrending;
  }

  get title() {
    return this._title;
  }

  get thumbnail() {
    return this._thumbnail;
  }

  get thumbnailTrending() {
    return this._thumbnail.trending.large;
  }

  get thumbnailRegular() {
    return this._thumbnail.regular;
  }

  get year() {
    return this._year;
  }

  get category() {
    return this._category;
  }

  get rating() {
    return this._rating;
  }

  get isBookmarked() {
    return this._isBookmarked;
  }

  get isTrending() {
    return this._isTrending;
  }
}

export default Media;

// "title": "Bottom Gear",
//     "thumbnail": {
//       "trending": {
//         "small": "./assets/thumbnails/bottom-gear/trending/small.jpg",
//         "large": "./assets/thumbnails/bottom-gear/trending/large.jpg"
//       },
//       "regular": {
//         "small": "./assets/thumbnails/bottom-gear/regular/small.jpg",
//         "medium": "./assets/thumbnails/bottom-gear/regular/medium.jpg",
//         "large": "./assets/thumbnails/bottom-gear/regular/large.jpg"
//       }
//     },
//     "year": 2021,
//     "category": "Movie",
//     "rating": "PG",
//     "isBookmarked": false,
//     "isTrending": true
