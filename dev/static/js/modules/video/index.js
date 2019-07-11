import { ready } from '../../utils/utils';
import Video from './video';

ready(function() {
  new Video({ target: '#main-video' });
});
