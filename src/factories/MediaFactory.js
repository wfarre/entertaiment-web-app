import Media from "../models/Media.js";

class MediaFactory {
  constructor(data, type) {
    if ((type = "json")) {
      return new Media(data);
    }
  }
}

export default MediaFactory;
