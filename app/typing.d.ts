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
  github: string
  starDate: string
  endDate: string
  body: any
  resources: any
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
}

export type { Project, Post, Category }



