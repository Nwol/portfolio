import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import TechBadge from '../components/TechBadge';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <Box>
        <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
          Projects
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
          Product-minded apps across web, cloud, and mobile.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 820 }}>
          These projects use the same practical instincts from my resume: map-based workflows,
          cloud persistence, backend APIs, containerized services, and responsive frontend work.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 2.5,
        }}
      >
        {projects.map((project) => (
          <Card key={project.name} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Stack spacing={2} sx={{ height: '100%' }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {project.name}
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.detail}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} size="small" />
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
};

export default Projects;
