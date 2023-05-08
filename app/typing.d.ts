interface Project {
  title: string
  slug: {
    current: string
  }
  mainImage: {
    alt: string
    asset: {
      url: string
    }
  }
  url: string
  starDate: string
  endDate: string
  body: any
}

interface Post {
  title: string
  slug: {
    current: string
  }
  mainImage: {
    alt: string
    asset: {
      url: string
    }
  }
  categories: {
    title: string
  }[]
  publishedAt: string
  body: any
}

interface Category {
  title: string
  description: string
}

export type { Project, Post, Category }



