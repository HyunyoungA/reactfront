import './review.css';
import profile12 from '../Recourse/pro1.JPG';

function TPreview() {
    return (
        <>
            <div className='reviewWrap'>
                <div className="reviewComent">
                    <div className='profileWrap'>
                        <div className='profile'>
                            <img style={{width: 'auto', height: '50px' , objectFit: 'cover'}} src={profile12} alt = "profileImg"></img>
                        </div>
                        <span className='nickName'>닉네임</span>
                        <span className='nickName'>회원님</span>
                        <div className='starWrap'>
                            <label for="rate1">⭐</label><input type="radio" name="rating" value="1" id="rate1"/>
                            <label for="rate2">⭐</label><input type="radio" name="rating" value="2" id="rate2"/>
                            <label for="rate3">⭐</label><input type="radio" name="rating" value="3" id="rate3"/>
                            <label for="rate4">⭐</label><input type="radio" name="rating" value="4" id="rate4"/>
                            <label for="rate5">⭐</label><input type="radio" name="rating" value="5" id="rate5"/>
                        </div>
                    </div>
                    <div className='reviewContent'>
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                    </div>
                </div>
                <div className="reviewComent">
                    <div className='profileWrap'>
                        <div className='profile'>
                            <img style={{width: 'auto', height: '50px' , objectFit: 'cover'}} src={profile12} alt = "profileImg"></img>
                        </div>
                        <span className='nickName'>닉네임</span>
                        <span className='nickName'>회원님</span>
                        <div className='starWrap'>
                            <label for="rate1">⭐</label><input type="radio" name="rating" value="1" id="rate1"/>
                            <label for="rate2">⭐</label><input type="radio" name="rating" value="2" id="rate2"/>
                            <label for="rate3">⭐</label><input type="radio" name="rating" value="3" id="rate3"/>
                            <label for="rate4">⭐</label><input type="radio" name="rating" value="4" id="rate4"/>
                            <label for="rate5">⭐</label><input type="radio" name="rating" value="5" id="rate5"/>
                        </div>
                    </div>
                    <div className='reviewContent'>
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                        리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default TPreview;