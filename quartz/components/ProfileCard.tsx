import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProfileCard: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const profileImage = joinSegments(baseDir, "assets/profile.jpeg")

  return (
    <aside class="profile-card" aria-label="Profile">
      <img class="profile-card__photo" src={profileImage} alt="김보람 프로필 사진" />
      <div class="profile-card__body">
        <p class="profile-card__eyebrow">Backend Developer</p>
        <h2>김보람</h2>
        <p>운영 이슈를 코드, 데이터, 서버 설정까지 추적해 개선 과제로 바꿉니다.</p>
      </div>
      <div class="profile-card__links">
        <a href="mailto:boram04415@gmail.com">Email</a>
        <a href="https://github.com/boram0415">GitHub</a>
        <a href="https://velog.io/@boram0415/posts">Velog</a>
      </div>
    </aside>
  )
}

ProfileCard.css = `
.profile-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.profile-card__photo {
  width: 12.5rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin: 0;
  border: 1px solid var(--lightgray);
  box-shadow: 0 1.2rem 3rem rgba(15, 23, 42, 0.12);
}

.profile-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.profile-card__eyebrow {
  color: var(--secondary);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0;
  margin: 0;
}

.profile-card h2 {
  font-size: 1.5rem;
  margin: 0;
}

.profile-card p {
  margin: 0;
}

.profile-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.profile-card__links a {
  border: 1px solid var(--lightgray);
  border-radius: 999px;
  color: var(--dark);
  font-size: 0.88rem;
  padding: 0.35rem 0.75rem;
}

@media all and (max-width: 800px) {
  .profile-card {
    align-items: center;
    text-align: center;
  }

  .profile-card__photo {
    width: 9.5rem;
  }

  .profile-card__links {
    justify-content: center;
  }
}
`

export default (() => ProfileCard) satisfies QuartzComponentConstructor
