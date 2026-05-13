-- LAPCIRCUIT SUPABASE SCHEMA AND MOCK DATA SCRIPT
-- Run this entire script in your Supabase SQL Editor to set up your tables and insert the starter data.

-- 1. TESTIMONIALS TABLE
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  location TEXT,
  review TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_approved BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SERVICES TABLE
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  features TEXT[] NOT NULL,
  icon_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. PRICING PACKAGES TABLE
CREATE TABLE pricing_packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  popular BOOLEAN DEFAULT false,
  description TEXT,
  features TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. INQUIRIES TABLE (Contact Form Submissions)
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. STATS TABLE
CREATE TABLE stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. TEAM MEMBERS TABLE
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SET ROW LEVEL SECURITY (RLS) POLICIES
-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read data (Public Read Access)
CREATE POLICY "Public read access for testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access for pricing_packages" ON pricing_packages FOR SELECT USING (true);
CREATE POLICY "Public read access for stats" ON stats FOR SELECT USING (true);
CREATE POLICY "Public read access for team_members" ON team_members FOR SELECT USING (true);

-- Allow anyone to insert inquiries (so contact form works)
CREATE POLICY "Public insert access for inquiries" ON inquiries FOR INSERT WITH CHECK (true);


-- INSERT INITIAL STARTER DATA

-- Insert Testimonials
INSERT INTO testimonials (client_name, business_name, location, review, rating, is_approved) VALUES
('Ruwan Wijesinghe', 'FreshMart Supermarkets', 'Colombo', 'LapCircuit completely overhauled our 5-branch network. The POS systems are incredibly fast, and their lifetime support promise is real. They answer the phone at 2 AM. Highly recommend their services to any expanding retail business.', 5, true),
('Sarah Fernando', 'Cafe Colombo', 'Kandy', 'As a small cafe owner, I was intimidated by complex systems. The LapCircuit team set everything up, trained my staff in one day, and the touchscreens work flawlessly.', 5, true),
('Dinesh Kumar', 'MediCare Pharmacy', 'Galle', 'We purchased 10 business laptops for our back office along with our front-desk POS. Excellent hardware quality and unbeatable pricing.', 5, true),
('Amila Perera', 'Perera & Sons', 'Negombo', 'The lifetime maintenance guarantee gives us immense peace of mind. Whenever there is a minor glitch, their remote support fixes it in minutes.', 5, true),
('Nadeeka Silva', 'Style Boutique', 'Kurunegala', 'We upgraded our old cash registers to their modern POS systems. The inventory management integration saved us hours of manual work every week.', 4, true),
('Mohammed Fazil', 'Fazil Hardware', 'Trincomalee', 'Superb hardware quality. The laptops we bought for our accounting team are fast and reliable. The customer service from LapCircuit is exceptional.', 5, true);

-- Insert Services
INSERT INTO services (title, description, features, icon_name) VALUES
('POS Installation & Setup', 'End-to-end point of sale setups for supermarkets, pharmacies, and restaurants. We handle the networking, hardware placement, and software configuration.', ARRAY['Touchscreen Terminals', 'Thermal Printers & Scanners', 'Cash Drawer Integration', 'Inventory Software Setup'], 'Monitor'),
('Business Laptops Supply', 'High-performance computing solutions for back-office management, development teams, and mobile executives.', ARRAY['Premium Brands (Dell, HP, Lenovo)', 'Bulk Order Discounts', 'Pre-configured Software', 'Extended Hardware Warranty'], 'Laptop'),
('Lifetime Maintenance', 'Our unique lifetime guarantee ensures your hardware runs smoothly forever. No expensive AMCs, just reliable support.', ARRAY['24/7 Remote Desktop Support', 'On-site Hardware Repair', 'Free Software Updates', 'Preventative Diagnostics'], 'Shield'),
('Network Infrastructure', 'Secure and fast local networks tailored for multi-terminal POS environments to ensure zero drops during peak hours.', ARRAY['High-speed Routers', 'Secure LAN/WLAN Setup', 'Failover Connections', 'Cable Management'], 'Wifi');

-- Insert Pricing Packages
INSERT INTO pricing_packages (name, price, popular, description, features) VALUES
('Starter POS Bundle', 'LKR 120,000', false, 'Perfect for single-location small businesses, cafes, and retail shops.', ARRAY['1x Touchscreen POS Terminal', 'Thermal Receipt Printer', 'Cash Drawer & Scanner', 'Basic Inventory Software', '1 Year Standard Warranty']),
('Premium Multi-Branch', 'Custom Quote', true, 'Enterprise-grade setup for supermarkets, pharmacies, and chain restaurants.', ARRAY['Multiple POS Terminals', 'Cloud Database Sync', 'Advanced Analytics Dashboard', 'Employee Access Controls', 'Lifetime Maintenance Guarantee', '24/7 Priority Support']),
('Business Laptops', 'From LKR 85,000', false, 'Reliable refurbished & new laptops for back-office and administration.', ARRAY['Core i5 / i7 Processors', '8GB - 16GB RAM Options', 'Fast NVMe SSD Storage', 'Windows 11 Pro Licensed', '6-12 Months Hardware Warranty']);

-- Insert Stats
INSERT INTO stats (value, label) VALUES
('500+', 'Businesses Served'),
('1200+', 'Laptops Sold'),
('750+', 'POS Installed'),
('99%', 'Uptime Guaranteed');

-- Insert Team Members
INSERT INTO team_members (name, role, image_url) VALUES
('Naveen Perera', 'Lead Implementation Engineer', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop'),
('Dr. Saman Kumara', 'Network Architecture Specialist', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop'),
('Anjali Fernando', 'Head of Customer Success', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop'),
('Mohammed Zaid', 'Hardware Diagnostics Lead', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop');

-- 7. CLIENT LOGOS TABLE
CREATE TABLE client_logos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  display_order INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE client_logos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access for client_logos" ON client_logos FOR SELECT USING (true);

INSERT INTO client_logos (name, logo_url, display_order, is_active) VALUES
('PC and Network Solution', '', 1, true),
('B Class Lifestyle', '', 2, true),
('Nawaloka Group', '', 3, true),
('Litro Gas - Nawela Kandy', '', 4, true),
('Alumex - Thushara Group', '', 5, true),
('TVS X - Sachin TV', '', 6, true);

