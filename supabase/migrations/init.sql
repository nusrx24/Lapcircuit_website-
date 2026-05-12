-- Schema for LapCircuit

-- 1. pricing_packages
CREATE TABLE pricing_packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('pos', 'laptop')),
    price DECIMAL(10, 2),
    features TEXT[],
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. services
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. team_members
CREATE TABLE team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    bio TEXT,
    photo_url VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. testimonials
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_name VARCHAR(255) NOT NULL,
    business_name VARCHAR(255),
    review TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    photo_url VARCHAR(500),
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. blog_posts
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image_url VARCHAR(500),
    status VARCHAR(50) CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. client_logos
CREATE TABLE client_logos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(500) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. stats
CREATE TABLE stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    label VARCHAR(255) NOT NULL,
    value INTEGER NOT NULL,
    icon VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. projects_ideas
CREATE TABLE projects_ideas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) CHECK (status IN ('idea', 'in_review', 'approved', 'live')),
    submitted_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. inquiries
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    business_type VARCHAR(100),
    service_interest VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(50) CHECK (status IN ('new', 'read', 'replied')) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS) policies
-- By default, public data is readable by anyone, but writable only by authenticated admins.
-- Inquiries can be inserted by anyone, but read only by authenticated admins.

ALTER TABLE pricing_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_logos ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects_ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Select policies for public read access
CREATE POLICY "Enable read access for all users" ON pricing_packages FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON services FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON team_members FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON testimonials FOR SELECT USING (is_approved = true);
CREATE POLICY "Enable read access for all users" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Enable read access for all users" ON client_logos FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON stats FOR SELECT USING (true);

-- Insert policies for public
CREATE POLICY "Enable insert for all users" ON inquiries FOR INSERT WITH CHECK (true);

-- Allow admins to do everything on all tables
-- This assumes admins are authenticated users in auth.users
CREATE POLICY "Enable full access for authenticated users" ON pricing_packages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON team_members FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON client_logos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON stats FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON projects_ideas FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Enable full access for authenticated users" ON inquiries FOR ALL USING (auth.role() = 'authenticated');
