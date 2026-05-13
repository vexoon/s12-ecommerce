import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

// Copyright bileşenine isDark prop'u ekledik
function Copyright({ isDark }) {
  return (
    <Typography variant="body2" sx={{ color: isDark ? 'grey.400' : 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link
        href="https://mui.com/"
        sx={{
          color: isDark ? 'grey.400' : 'text.secondary',
        }}
      >
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

// isDark prop'unu burada karşılıyoruz
export default function Footer({ isDark }) {
  // Karanlık modda metin renkleri için yardımcı değişken
  const textColor = isDark ? 'grey.300' : 'text.secondary';
  const headingColor = isDark ? '#fff' : 'text.primary';

  return (
    <Box component="footer" sx={{ backgroundColor: isDark ? '#121212' : 'transparent', transition: '0.3s' }}>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              {/* SitemarkIcon'un rengini de isDark'a göre ayarlayabilirsin */}
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2, color: headingColor }}
              >
                Join the newsletter
              </Typography>
              <Typography variant="body2" sx={{ color: textColor, mb: 2 }}>
                Subscribe for weekly updates. No spams ever!
              </Typography>
              
              <InputLabel htmlFor="email-newsletter" sx={{ color: headingColor, mb: 1 }}>Email</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  placeholder="Your email address"
                  sx={{ 
                    width: '250px',
                    // Input içindeki metni karanlıkta beyaz yapma
                    '& .MuiOutlinedInput-root': {
                      color: isDark ? '#fff' : 'inherit',
                      '& fieldset': { borderColor: isDark ? 'grey.700' : 'inherit' }
                    }
                  }}
                />
                <Button variant="contained" color="primary" size="small" sx={{ flexShrink: 0 }}>
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          
          {/* Link Grupları */}
          {[ 
            { title: "Product", links: ["Features", "Testimonials", "Highlights", "Pricing", "FAQs"] },
            { title: "Company", links: ["About us", "Careers", "Press"] },
            { title: "Legal", links: ["Terms", "Privacy", "Contact"] }
          ].map((group) => (
            <Box key={group.title} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 'medium', color: headingColor }}>
                {group.title}
              </Typography>
              {group.links.map(link => (
                <Link key={link} variant="body2" href="#" sx={{ color: textColor, '&:hover': { color: '#ff6000' } }}>
                  {link}
                </Link>
              ))}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: isDark ? 'grey.800' : 'divider',
          }}
        >
          <div>
            <Link variant="body2" href="#" sx={{ color: textColor }}>
              Privacy Policy
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5, color: textColor }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link variant="body2" href="#" sx={{ color: textColor }}>
              Terms of Service
            </Link>
            <Copyright isDark={isDark} />
          </div>
          
          <Stack direction="row" spacing={1} sx={{ color: textColor }}>
            <IconButton color="inherit" size="small" href="https://github.com/mui"><GitHubIcon /></IconButton>
            <IconButton color="inherit" size="small" href="https://x.com/MaterialUI"><TwitterIcon /></IconButton>
            <IconButton color="inherit" size="small" href="https://www.linkedin.com/company/mui/"><LinkedInIcon /></IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}