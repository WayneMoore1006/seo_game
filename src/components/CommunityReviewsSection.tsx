import React from 'react';

export const CommunityReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex_Gamer24",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnj6M7R85Fl5y5vNp95xbfPwmNkmGuiE3rQQF3ndFtVJQSEJnG8ztBNnDSRXon1PISHn6IPSIdS2QDl8TFK5AJX_Z9wShtJQ-fqXlSV3X3oM0a29rXEaHYNe7RH4KzWk7va2l_zVQwOsjUgjxc6v9uWBYHf3lWjNTM_EzsHWx-Rz61f76xQ-uxsB7HbF1nstnpkPd5dl4ic48qMvxgq4IVU5ebt7roFz8pwdWJyFzVOr0-GE5wxnaAVK8-fDwoXcCxEiTmePM_akxy",
      game: "Starlight Odyssey",
      content: "\"Hands down the best co-op experience I've had in years. The way the mechanics force you to communicate without being frustrating is a masterclass in game design.\"",
      stars: 5,
      helpful: "1.2k Helpful"
    },
    {
      id: 2,
      name: "SarahPixel",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3rAfWEqEEtvl1qh15XMa_vsGmcUHykCbF19Y9lurm_tSmqdshWGcLmEaoJIK8UND81_d9NLIP3H7RzVeiS_8mpacyc3YfV0zbqMH4jYWp0LhlroTJBryCa-e3TVheDwVyVndMNZXI6_BhAFqdQuoFASHz1w0g0s8AZOdj-HKcak_cFJk-Od0CXtlFRbWzRyTlmMk913y7LA9ALmLYTixV6LOjsX6vERhTUU9rUnoFnjzurfEO3KgOlwbkOi6psvmfkq20fjvVP85-",
      game: "Neon Squad",
      content: "\"The atmosphere in this game is incredible. It's rare to find a multiplayer game that feels this immersive. Great for those who love deep lore and tactical play.\"",
      stars: 4.5,
      helpful: "840 Helpful"
    },
    {
      id: 3,
      name: "Devin_W",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6QurUDCUst5ErNsnOGaGxEFbBNI61LDiBZ5zkDy5bSozPJCH7pHnceOGWSsnle4FC4utEQzRQvE-eQ02bphGSaOyZGbnOaTfeAOWH4noSoiNl1q-PTWMDMLZBEfHdVwC40rxKL5jFdV8KR7VoY7SzChHXmKLBwKH8gY91RO5FhEc30q9u9HfxyvjkRe4wXPYEdGE3USSR3qSro3_8AawPo-oHJujwfO22Ky01fhPI8_3mUTaTNyhDZLxaVU6eoiKsP8GZ2mmUvF3o",
      game: "Forge Masters",
      content: "\"Finally, a crafting game that doesn't feel like a chore! Playing this with three friends is pure joy. Highly recommend for casual weekend gaming sessions.\"",
      stars: 5,
      helpful: "2.1k Helpful"
    }
  ];

  const renderStars = (stars: number) => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(stars)) {
        starIcons.push(<span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>);
      } else if (i - 0.5 === stars) {
        starIcons.push(<span key={i} className="material-symbols-outlined text-sm">star_half</span>);
      } else {
        starIcons.push(<span key={i} className="material-symbols-outlined text-sm">star</span>);
      }
    }
    return starIcons;
  };

  return (
    <section className="py-12 px-8 md:px-16 lg:px-24 mb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface">Community Favorites</h2>
          <p className="text-on-surface-variant text-sm mt-1">The games people can't stop talking about.</p>
        </div>
        <div className="flex bg-surface-container rounded-full p-1 border border-outline-variant/10">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary text-xs font-bold">Recent</button>
          <button className="px-6 py-2 rounded-full text-on-surface-variant text-xs font-bold hover:text-on-surface">All Time</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-surface-container rounded-xl p-8 border-l-4 border-primary/40 relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img alt="Reviewer" className="w-full h-full object-cover" src={review.avatar}/>
              </div>
              <div>
                <p className="text-on-surface font-bold text-sm">{review.name}</p>
                <p className="text-on-surface-variant text-[10px]">Reviewed: {review.game}</p>
              </div>
            </div>
            <p className="text-on-surface font-light italic leading-relaxed mb-6">{review.content}</p>
            <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
              <div className="flex text-primary gap-1">
                {renderStars(review.stars)}
              </div>
              <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{review.helpful}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
