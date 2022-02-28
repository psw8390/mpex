import React from "react";
import styles from "./matchingbox.module.css";
import gymImg from "./gymImg.jpeg";


function Matchingbox() {
  return (
    <div className={styles.searchBox}>
      <h1 className={styles.searchBoxTitle}>
        매칭을 원하시는 날짜를 누르세요.
      </h1>
      <div className={styles.matchingUiBox}>
        <div className={styles.matchingRegisterBox}>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">매칭 등록</a>
            </li>
          </ul>
        </div>
        <div className={styles.tagSection}>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/03(목)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/04(금)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/05(토)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/06(일)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/07(월)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/08(화)</a>
            </li>
          </ul>
          <ul className={styles.tagSectionContainer}>
            <li className={styles.tagSectionItem}>
              <a href="https://naver.com">02/09(수)</a>
            </li>
          </ul>
        </div>
      </div>
      <form className={styles.matchigBox}>
        <div className={styles.matchigBoxTime}>
          <input placeholder='운동시작시간'></input>
          <div>~</div>
          <input placeholder='운동종료시간'></input>
        </div>
        <input type="file" className={styles.gymImg} />
        <div className={styles.matchingInfo}>
          <input placeholder='장소명'></input>
          <input placeholder='경기방식'></input>
          <input placeholder='특이사항:'></input>
        </div>
        <div className={styles.mattchingUI}>
          <button>
            <a href="https://naver.com">매칭신청</a>
          </button>
          <div>03/15명</div>
        </div>
      </form>

      <div className={styles.matchigBox}>
        <div className={styles.matchigBoxTime}>
          <div>11:00</div>
          <div>~</div>
          <div>15:00</div>
        </div>
        <img className={styles.gymImg} alt="homeBaneer" src={gymImg} />
        <div className={styles.matchingInfo}>
          <div>목포대학교 부설 체육관</div>
          <div>농구 5:5 풀코트</div>
          <div className={styles.significant}>특이사항 : </div>
        </div>
        <div className={styles.mattchingUI}>
          <button>
            <a href="https://naver.com">매칭신청</a>
          </button>
          <div>03/15명</div>
        </div>
      </div>
      <div className={styles.matchigBox}>
        <div className={styles.matchigBoxTime}>
          <div>11:00</div>
          <div>~</div>
          <div>15:00</div>
        </div>
        <img className={styles.gymImg} alt="homeBaneer" src={gymImg} />
        <div className={styles.matchingInfo}>
          <div>목포대학교 부설 체육관</div>
          <div>농구 5:5 풀코트</div>
          <div className={styles.significant}>특이사항 : </div>
        </div>
        <div className={styles.mattchingUI}>
          <button>
            <a href="https://naver.com">매칭신청</a>
          </button>
          <div>03/15명</div>
        </div>
      </div>
    </div>
  )
}

export default Matchingbox;